type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

const profile: User = {
  name: "Mango",
  surname: "Mango",
  email: "mango@gmail.com",
  password: "mango_mango",
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  return { ...initialValues, ...profile };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
