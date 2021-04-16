export interface Record {
  id?: number;
}

export interface Article extends Record {
  id?: number;
  title: string;
  text: string;
  author?: Author | null;
}

export interface Author extends Record {
  id?: number;
  name: string;
  articles?: Article[];
}
