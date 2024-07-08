type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Реалізуйте Params так,
// щоб унеможливити поле 'errors' з типу Form
type Params = Omit<Form, "errors">;

const profile: Params = {
  email: "manngo@gmail.com",
  firstName: "mango",
  lastName: null,
  phone: "9495959504",
  //   errors: null,
};

profile.phone;
// profile.eroors;
