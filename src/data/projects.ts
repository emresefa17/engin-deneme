export type ProjectCategory = 'ship-design' | 'naval-architecture' | 'marine-engineering' | 'offshore';

export interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  imageUrl: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Yokohama Usturmaça',
    description: 'Yokohama usturmaça, denizcilik sektöründe gemilerin ve liman yapıların güvenliğini sağlamak amacıyla kullanılan, yüksek basınçlı hava ile şişirilmiş yüzer kauçuk tamponlardır.',
    category: 'ship-design',
    imageUrl: 'src/images/images.png',
    year: '2023'
  },
  {
    id: 2,
    title: 'Pnömatik Usturmaça',
    description: 'Genellikle limanlarda, iskelelerde veya gemilerde kullanılan, hava (pnömatik) ile şişirilmiş, darbe emici bir denizcilik güvenlik ekipmanıdır.',
    category: 'marine-engineering',
    imageUrl: 'src/images/pno.png',
    year: '2022'
  },
  {
    id: 3,
    title: 'Hidropnömatik Usturmaça',
    description: 'Hidropnömatik usturmaçalar, içinde hem hava hem su bulunan, dikey olarak yerleştirilmiş özel usturmaçalardır. Gemiler özellikle su altı bordası derin olan veya yan yüzeyi değişken (örneğin denizaltılar) araçlardır. Bu tip usturmaçalar bu özel durumlara uyum sağlar.',
    category: 'offshore',
    imageUrl: 'src/images/hidro1.png',
    year: '2021'
  },
  {
    id: 4,
    title: 'Dolgu Tipi Usturmaça',
    description: 'İçi tamamen enerji emici elastik dolgu malzemesiyle (genellikle EVA köpük veya PU köpük) doldurulmuş, dayanıklı dış yüzeye sahip bir denizcilik tampon sistemidir. Gemilerin veya teknelerin iskeleye yanaşırken oluşan çarpmaları emmek amacıyla kullanılır.',
    category: 'naval-architecture',
    imageUrl: 'src/images/dolgu1.png',
    year: '2023'
  },
  {
    id: 5,
    title: 'Hidrolik Sistem Yağları',
    description: 'Hidrolik sistemlerde güç iletimini sağlamak, sürtünmeyi azaltmak, aşınmayı önlemek, ısıyı dağıtmak ve sistemin düzgün çalışmasını desteklemek amacıyla kullanılan özel sıvı yağlardır.',
    category: 'ship-design',
    imageUrl: 'src/images/hidro.png',
    year: '2022'
  },
  {
    id: 6,
    title: 'Motor ve Şanzıman Yağları',
    description: 'Araçların temel iki sistemi olan motor ve şanzımanın (vites kutusunun) sağlıklı çalışmasını sağlayan, görevleri ve içerikleri farklı olan özel yağ türleridir. Her ikisi de hareketli parçaların korunmasında ve verimliliğin artırılmasında kritik rol oynar.',
    category: 'marine-engineering',
    imageUrl: 'src/images/yag.png',
    year: '2021'
  },
  {
    id: 7,
    title: 'Kompressör Yağları',
    description: 'Endüstriyel kompresörlerde kullanılan, makinenin verimli ve uzun ömürlü çalışmasını sağlayan özel yağlardır.',
    category: 'marine-engineering',
    imageUrl: 'src/images/KOMPRESSÖR YAĞLAR/kompressor.jpg',
    year: '2023'
  },
  {
    id: 8,
    title: 'CNC Torna',
    description: 'Yüksek hassasiyetli metal işleme için kullanılan bilgisayar kontrollü torna tezgahıdır.',
    category: 'offshore',
    imageUrl: 'src/images/cnc.jpg',
    year: '2023'
  },
  {
    id: 9,
    title: 'Boru Bükme Tezgahı',
    description: 'Çeşitli çap ve kalınlıklardaki boruları istenilen şekle getirmek için kullanılan makinedir.',
    category: 'marine-engineering',
    imageUrl: 'src/images/boru.jpg',
    year: '2022'
  },
  {
    id: 10,
    title: 'Lazer Kesim Tezgahı',
    description: 'Metal ve diğer malzemeleri hassas şekilde kesmek için kullanılan lazer tabanlı makinedir.',
    category: 'ship-design',
    imageUrl: 'src/images/lazer.jpg',
    year: '2023'
  },
  {
    id: 11,
    title: 'Teleskopik Eklemli Platform',
    description: 'Yüksek alanlara erişim için kullanılan, eklemli ve uzayabilen platform sistemidir.',
    category: 'offshore',
    imageUrl: 'src/images/platform.jpg',
    year: '2023'
  },
  {
    id: 12,
    title: 'Teleskopik Merdivenli Platform',
    description: 'Çalışma alanlarına güvenli erişim sağlayan, teleskopik merdivenle donatılmış platform.',
    category: 'offshore',
    imageUrl: 'src/images/merdiven.jpg',
    year: '2022'
  },
  {
    id: 13,
    title: 'Caraskal',
    description: 'Ağır yükleri kaldırmak için kullanılan mekanik kaldırma ekipmanıdır.',
    category: 'marine-engineering',
    imageUrl: 'src/images/caraskal.jpg',
    year: '2021'
  },
  {
    id: 14,
    title: 'Yangın Alarm Sistemi Mlz ve Kurulumu',
    description: 'Yangın algılama ve alarm sistemlerinin malzeme temini ve kurulumu hizmeti.',
    category: 'naval-architecture',
    imageUrl: 'src/images/yangin.jpg',
    year: '2023'
  },
  {
    id: 15,
    title: 'Yedek Parçalar',
    description: 'Makine ve ekipmanlar için çeşitli yedek parça temini.',
    category: 'marine-engineering',
    imageUrl: 'src/images/yedek.jpg',
    year: '2023'
  },
]