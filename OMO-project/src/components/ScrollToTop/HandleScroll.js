const handleScroll = e => {
  if (!window.scrollY) return;
  // 현재 위치가 이미 최상단일 경우 return

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

};

export default handleScroll;