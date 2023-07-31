export interface Feed {
  /**
   * URL of endpoint expected to return with ListItem[] or error with status
   */
  endpoint: string;
}

export interface FeedResponse {
  statusCode: number;
  message: string;
  data: ListItem[];
}

export interface ListItem {
  message?: string;
  description?: string;
  icon?: string;
}
