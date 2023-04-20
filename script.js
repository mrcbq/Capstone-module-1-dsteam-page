const bgSource = './images/chess-img.png';
const courses = [
  {
    logoSource: './images/codse.png',
    title: 'CODSE',
    subtitle: 'Certificación Certified Offensive and Defensive Security EXPERT',
    description: "The course is fully certifiable, and at the end of the course you must pass a certification exam, which consists of several 100% practical solution statements, related to a digital forensic investigation, of the type 'Capture The Flag' computer challenge. The certification voucher is 100% included in the offered price of the Professional level ethical hacking and defense course.",
    bgColor: 'red',
  },
  {
    logoSource: './images/codse2.png',
    title: 'CODSE Xtreme',
    subtitle: 'Certificación Certified Offensive and Defensive Security Professional',
    description: "The 'Extreme' version of the professional course is characterized by including new topics and attack and defense techniques such as: Pivoting, Lateral Movement, Aggressive escalation of privileges in Linux and Windows systems, SIEM event correlation systems, practical exercises such as Red teams, where an entire corporate infrastructure such as Windows Active Directory is attacked.",
  },
  {
    logoSource: './images/kaliLogo.png',
    title: 'Kali Linux 2023',
    subtitle: 'Operating system base for the laboratories',
    description: 'Exercises such as Capture The Flag, practical classes and proofs of concept, the operating system specialized in intrusion tests is used.',
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
    description: 'Wireshark and Scapy are two free software tools that allow the analysis and manipulation of network packets. This topic covers configuring and using these tools, as well as network packet analysis techniques for identifying network problems and resolving security problems.',
  },
  {
    logoSource: './images/nmap.jpg',
    title: 'Scanning and Enumeration Technical Tests with NMAP',
    subtitle: 'Gather information about a network or system',
    description: 'Finding vulnerabilities and potential entry points. NMAP is an open-source tool used to perform these scanning and enumeration technical tests on a network or system.',
  },
];

const courseContainer = document.getElementById('courses-wrapper');

courses.forEach((course, idx) => {
  const card = document.createElement('div');
  if (idx >= 2) {
    card.className = 'card flex-row align-items-center p-2 border-0 course-card active-more-bnt';
  } else {
    card.className = 'card flex-row align-items-center p-2 border-0 course-card';
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
  courseText.className = 'card-course-text p-3';

  const title = document.createElement('h5');
  title.className = 'card-title p-1';
  title.textContent = course.title;
  courseText.appendChild(title);

  const subtitle = document.createElement('h5');
  subtitle.className = 'card-title p-1 color-red';
  subtitle.textContent = course.subtitle;
  courseText.appendChild(subtitle);

  const description = document.createElement('p');
  description.className = 'card-text p-1 color-black';
  description.textContent = course.description;
  courseText.appendChild(description);

  card.appendChild(imgContainer);
  card.appendChild(courseText);

  courseContainer.appendChild(card);
});

const moreBtn = document.getElementById('more-btn');
const activeMoreBtn = document.querySelectorAll('.active-more-bnt');

moreBtn.addEventListener('click', () => {
  activeMoreBtn.forEach(btn => btn.classList.toggle('active-more-bnt'));
  moreBtn.innerHTML = moreBtn.textContent === 'MORE' ? 'LESS' : 'MORE';
});