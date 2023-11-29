type RegisteredPasswordType = {
  serviceValue: string,
  loginValue: string,
  passwordValue: string,
  urlValue: string,
  id: number,
};

const mockup: RegisteredPasswordType[] = [
  {
    serviceValue: 'LinkedIn',
    loginValue: 'Meu usuário',
    passwordValue: 'Senh4Dol!nked1n',
    urlValue: 'https://www.linkedin.com',
    id: 1,
  },
  {
    serviceValue: 'Instagram',
    loginValue: 'Meu insta',
    passwordValue: '!nst4Granmk',
    urlValue: 'https://www.instagram.com',
    id: 2,
  },
  {
    serviceValue: 'Google',
    loginValue: 'EuGoogler',
    passwordValue: 'g0og!3p4ssw0rd',
    urlValue: 'https://www.google.com',
    id: 3,
  },
];

export default mockup;
