export type LoginForm = {
  email: string;
  password: string;
};

export type UserInfo = {
  userData: {
    email: string;
    password: string;
    nickname: string;
    accesToken: string;
    refreshToken: string;
    isLogined: boolean;
  };
};
