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
    loginValue: 'myLinkedinUser',
    passwordValue: 'Senh4Dol!nked1n',
    urlValue: 'https://www.linkedin.com',
    id: 1,
  },
  {
    serviceValue: 'Instagram',
    loginValue: 'MeuInsta',
    passwordValue: '!nst4Gram*k',
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
  {
    serviceValue: 'Pexels',
    loginValue: 'PhotoMe',
    passwordValue: 'P3x3!sphotoMe',
    urlValue: 'https://www.pexels.com',
    id: 4,
  },
  {
    serviceValue: 'FontAwesome',
    loginValue: 'FontForMe',
    passwordValue: 'mYf0nt5%',
    urlValue: 'https://www.fontawesome.com',
    id: 5,
  },
  {
    serviceValue: 'Trybe',
    loginValue: 'myTrybeUser',
    passwordValue: 'tryB3r$@',
    urlValue: 'https://app.betrybe.com/learn',
    id: 6,
  },
  {
    serviceValue: 'Stack Overflow',
    loginValue: 'helpMePlease',
    passwordValue: 'St4ackPa$$wordn',
    urlValue: 'https://www.linkedin.com',
    id: 7,
  },
  {
    serviceValue: 'GitHub',
    loginValue: 'MuitosRepos',
    passwordValue: 'MyRepo5%',
    urlValue: 'https://www.github.com',
    id: 8,
  },
  {
    serviceValue: 'npmjs',
    loginValue: 'IWantLibraries',
    passwordValue: 'g!mmeLibrari3s',
    urlValue: 'https://www.google.com',
    id: 9,
  },
];

export default mockup;
