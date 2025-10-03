import usersStore from '../store/users';
import UsersResponse from './users';
export const $fetchUsers = async (): Promise<UsersResponse> => {

  const url = new URL('./UsersMock.json', import.meta.url);

  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to load UsersMock.json');

  const raw = await res.json();

  return new UsersResponse({
    data: raw.data,
    meta: raw.meta ?? {
      total: raw.data.length,
      page: 1,
      perPage: raw.data.length,
    },
  });
};
