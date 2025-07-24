export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export interface PaginationParams {
  start?: number;
  limit?: number;
}

export interface PaginationMeta {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}
