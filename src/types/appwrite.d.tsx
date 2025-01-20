export interface Project {
  title: string;
  description: string;
  tags: Tag[];
  $id: string;
}

export interface Tag {
  tag: string;
  $id: string;
}

export interface TagsFilter {
  tag: string;
  $id: string;
  value: string;
}

export interface Message {
  name: string;
  email: string;
  message: string;
  $id?: string;
}
