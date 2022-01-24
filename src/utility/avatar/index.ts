const getAvatar = (value?: string, defaultValue?: string) => {
  return (
    value ?? `https://avatars.dicebear.com/4.5/api/initials/${defaultValue}.svg`
  );
};

export default getAvatar;
