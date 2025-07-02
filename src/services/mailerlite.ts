export class MailerLiteService {
  private apiKey: string;
  private baseUrl = 'https://connect.mailerlite.com/api';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async addSubscriber(email: string, groupName: string): Promise<{ success: boolean; error?: string }> {
    try {
      // First, get the group ID by name
      const groupId = await this.getGroupIdByName(groupName);
      if (!groupId) {
        return { success: false, error: 'Group not found' };
      }

      // Add subscriber to the group
      const response = await fetch(`${this.baseUrl}/subscribers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          email,
          groups: [groupId],
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return { success: false, error: errorData.message || 'Failed to add subscriber' };
      }

      return { success: true };
    } catch (error) {
      console.error('MailerLite error:', error);
      return { success: false, error: 'Network error occurred' };
    }
  }

  private async getGroupIdByName(groupName: string): Promise<string | null> {
    try {
      const response = await fetch(`${this.baseUrl}/groups`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch groups');
      }

      const data = await response.json();
      const group = data.data.find((g: { name: string }) => g.name.toLowerCase() === groupName.toLowerCase());

      return group ? group.id : null;
    } catch (error) {
      console.error('Failed to fetch groups:', error);
      return null;
    }
  }
}

// Create singleton instance - API key will be set from environment variable
export const mailerlite = new MailerLiteService(import.meta.env.VITE_MAILERLITE_API_KEY || '');
