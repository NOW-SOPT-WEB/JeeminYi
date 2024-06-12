//비밀번호 유효성 검사
export const validatePassword = (value) => {
  if (value) {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(value.trim());
  }
  return false;
};

//전화번호 형식 변환
export const formatPhoneNumber = (phoneNumber) => {
  const numbers = phoneNumber.replace(/\D/g, "");
  if (numbers.length <= 3) {
    return numbers;
  } else if (numbers.length <= 7) {
    return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
  } else {
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(
      7,
      11
    )}`;
  }
};
