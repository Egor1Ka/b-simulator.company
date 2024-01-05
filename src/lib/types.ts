export interface PostData {
  id: string;
  date: string;
  tags: string[];
  content?: string;
  [key: string]: any;
}

export interface MetadataParams {
  params: {
    locale: string;
  };
}
