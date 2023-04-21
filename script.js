const bgSource = './images/chess-img.png';
const courses = [
  {
    logoSource: './images/codse.png',
    title: 'CODSE',
    subtitle: 'Certificación Certified Offensive and Defensive Security EXPERT',
    description: 'Certification exam, consists of several 100% practical solution statements, related to a digital forensic investigation.',
  },
  {
    logoSource: './images/codse2.png',
    title: 'CODSE Xtreme',
    subtitle: 'Certificación Certified Offensive and Defensive Security Professional',
    description: 'Attack and defense techniques: Pivoting, Lateral Movement, Aggressive escalation of privileges in Linux and Windows systems.',
  },
  {
    logoSource: './images/kaliLogo.png',
    title: 'Kali Linux 2023',
    subtitle: 'Operating system base for the laboratories',
    description: 'Exercises such as Capture The Flag, practical classes and proofs of concept, system specialized in intrusion tests is used.',
  },
  {
    logoSource: './images/sec.png',
    title: 'Advanced level corporate network security',
    subtitle: 'Securing critical information systems and enterprise networks',
    description: 'Management, intrusion prevention, information security, vulnerability management, and disaster recovery.',
  },
  {
    logoSource: './images/wireshark.png',
    title: 'Network packet analysis',
    subtitle: 'Technique for diagnosing and solving problems in computer networks',
    description: 'Analysis and manipulation of network packets for identifying network problems and resolving security problems.',
  },
  {
    logoSource: './images/nmap.jpg',
    title: 'Scanning and Enumeration Technical Tests with NMAP',
    subtitle: 'Gather information about a network or system',
    description: 'Finding vulnerabilities and potential entry points. Scanning and enumeration technical tests on a network or system.',
  },
];

const courseContainer = document.getElementById('courses-wrapper');

courses.forEach((course, idx) => {
  const card = document.createElement('div');
  if (idx >= 2) {
    card.className = 'card flex-row border-0 course-card active-more-bnt';
  } else {
    card.className = 'card flex-row border-0 course-card';
  }

  const imgContainer = document.createElement('div');
  imgContainer.className = 'course-img-container flex-shrink-0';

  const imgBg = document.createElement('img');
  imgBg.className = 'card-img-bg p-1';
  imgBg.alt = '...';
  imgBg.src = bgSource;
  imgContainer.appendChild(imgBg);

  const imgLogo = document.createElement('img');
  imgLogo.className = 'card-img-course p-1';
  imgLogo.alt = '...';
  imgLogo.src = course.logoSource;
  imgContainer.appendChild(imgLogo);

  const courseText = document.createElement('div');
  courseText.className = 'card-course-text';

  const title = document.createElement('h5');
  title.className = 'card-title';
  title.textContent = course.title;
  courseText.appendChild(title);

  const subtitle = document.createElement('h5');
  subtitle.className = 'card-title color-red';
  subtitle.textContent = course.subtitle;
  courseText.appendChild(subtitle);

  const description = document.createElement('p');
  description.className = 'card-text color-black';
  description.textContent = course.description;
  courseText.appendChild(description);

  card.appendChild(imgContainer);
  card.appendChild(courseText);

  courseContainer.appendChild(card);
});

const moreBtn = document.getElementById('more-btn');
const activeMoreBtn = document.querySelectorAll('.active-more-bnt');

moreBtn.addEventListener('click', () => {
  activeMoreBtn.forEach((btn) => btn.classList.toggle('active-more-bnt'));
  moreBtn.innerHTML = moreBtn.textContent === 'MORE' ? 'LESS' : 'MORE';
});