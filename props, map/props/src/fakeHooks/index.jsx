export const fakeUseState = () => {
  //원래 useState는 여기 수식이 채워져있음
  let value;
  const setValue = () => {};
  //   return [value, setValue]; /*배열로 리턴하면 이름을 변경해서 받을 수 있음*/
  //return { value: value, setValue: setValue };
  return { value, setValue }; /*객체로 리턴하면 순서를 변경해서 받을 수 있음*/

  /*useState를 여러번 중복해서 쓸 경우가 많음. 따라서 객체보다는 배열이 더 적합함.
  객체를 사용할 경우 setValue: setNum2,3,4... 와 같이 다 변경해서 사용해야함*/
};
