export interface Project {
  title: string;
  description: string;
  tags: Tag[];
  $id: string;
  statuses: Status;
  $updatedAt: string;
  projectStatusHist: ProjectStatusHist[];
  idea: string;
  inspiration: string;
  name: string;
  features: Feature[];
  technologies: Technology[];
  notes: Note[];
  tasks: Task[];
}

export interface Tag {
  tag: string;
  $id: string;
}

export interface Status {
  status: string;
  description: string;
  $id: string;
  taskStatus: string;
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
  statuses: Status;
}

export interface Feature {
  description: string;
  statuses: Status;
}

export interface Technology {
  name: string;
  documentName: string;
  link: string;
}

export interface Note {
  title: string;
  note: string;
  $createdAt: string;
}

export interface Task {
  description: string;
  statuses: Status;
  priorities: Priority;
}

export interface Priority {
  priority: string;
}
