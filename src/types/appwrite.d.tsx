export interface Project {
  title: string;
  description: string;
  tags: Tag[];
  $id: string;
  status: Status;
  $updatedAt: string;
  projectStatusHist: ProjectStatusHist[];
}

export interface Tag {
  tag: string;
  $id: string;
}

export interface Status {
  status: string;
  description: string;
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

export interface ProjectStatusHist {
  statusStartMonth: string;
  status: Status;
}
