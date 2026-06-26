/* =============================================================================
 *  Site content data  ——  EDIT THIS FILE to update your homepage.
 *  你的主页内容都在这个文件里，改这里即可，无需动 HTML / CSS。
 *
 *  - PROFILE      : your identity + links (左侧名片 & hero)
 *  - RESEARCH     : research-interest cards (研究方向卡片)
 *  - PUBLICATIONS : papers, newest first (论文，新→旧)
 *  - NEWS         : timeline items (动态时间线)
 *  - EDUCATION    : CV / education timeline (教育经历)
 * ========================================================================== */

const PROFILE = {
  name:        'Zeyu Gan',
  nameZh:      '甘泽宇',
  role:        'Ph.D. Candidate',
  affiliation: 'Gaoling School of Artificial Intelligence, Renmin University of China',
  affiliationShort: 'GSAI · Renmin University of China',
  advisor:     'Prof. Yong Liu',
  location:    'Beijing, China',
  email:       'zygan@ruc.edu.cn',
  github:      'ZyGan1999',
  scholar:     'https://scholar.google.com/citations?user=aoVm7R0AAAAJ&hl=zh-CN&oi=sra',
  avatar:      'assets/img/avatar.jpg',
  cv:          'assets/ZeyuGan.pdf',
  // One-line tagline shown in the hero (副标题一句话)
  tagline:     'I study the mechanisms and theory behind Large Language Models.',
};

/* About paragraphs — each string is one paragraph. Markdown-style [text](url) links supported. */
const ABOUT = [
  "I'm a Ph.D. candidate at the [Gaoling School of Artificial Intelligence (GSAI)](http://ai.ruc.edu.cn/), [Renmin University of China](https://www.ruc.edu.cn/), advised by [Prof. Yong Liu](https://gsai.ruc.edu.cn/liuyong).",
  "I received my bachelor's and master's degrees from the [School of Information](https://info.ruc.edu.cn/), Renmin University of China, where I was advised by [Prof. Suyun Zhao](http://dblp.uni-trier.de/pers/hd/z/Zhao:Suyun) from the [DW&BI Lab](http://info.ruc.edu.cn/jsky/xsky/kytd/jsx/sjckyswznsys/index.htm).",
  "My current research mainly focuses on the **mechanism analysis and theory of Large Language Models (LLMs)** — understanding why they reason the way they do, and turning engineering heuristics into principled science.",
];

/* Research-interest cards. `color` maps to an Animal-Crossing app palette
   (app-blue / app-teal / app-green / app-yellow / app-pink / purple / app-orange ...). */
const RESEARCH = [
  { icon: '🧠', color: 'app-blue',  title: 'LLM Mechanism Analysis',
    desc: 'Opening the black box: how reasoning length, chain-of-thought, and synthetic data shape model behavior.' },
  { icon: '🎯', color: 'app-teal',  title: 'Reasoning & Alignment',
    desc: 'Slow-thinking, policy optimization, and multi-turn agents — making reasoning reliable and well-supervised.' },
  { icon: '📐', color: 'app-green', title: 'Machine Learning Theory',
    desc: 'Generalization, semi-supervised learning, and the theoretical foundations behind modern deep models.' },
];

/* -----------------------------------------------------------------------------
 *  PUBLICATIONS  — newest first.
 *  Fields:
 *    title    : paper title
 *    authors  : full author list (your name "Zeyu Gan" is auto-bolded)
 *    venue    : short badge text shown on the card  (e.g. 'CVPR 2023')
 *    type     : one of 'conference' | 'journal' | 'preprint'  (drives the filter tabs & tag color)
 *    year     : sort/grouping year
 *    excerpt  : one-sentence summary
 *    url      : link to paper / arXiv
 *    award    : (optional) e.g. 'Oral' / 'Spotlight'
 * --------------------------------------------------------------------------- */
const PUBLICATIONS = [
  {
    title:   'Statistical Priors for Implicit Preferences: Decoupling Skill Selection as a Local Harness in Personal Agents',
    authors: 'Zeyu Gan, Huayi Tang, Yong Liu',
    venue:   'arXiv 2026',
    type:    'preprint',
    year:    2026,
    excerpt: 'A decoupled "Local Harness" architecture for personal agents that isolates lightweight statistical preference learning from remote LLM semantic parsing.',
    url:     'https://arxiv.org/abs/2606.05828',
  },
  {
    title:   'Beyond the Black Box: A Survey on the Theory and Mechanism of LLMs',
    authors: 'Zeyu Gan, Ruifeng Ren, Wei Yao, Xiaolin Hu, Gengze Xu, Chen Qian, Huayi Tang, Zixuan Gong, Xinhao Yao, Pengwei Tang, Zhenxing Dou, Yong Liu',
    venue:   'arXiv 2026',
    type:    'preprint',
    year:    2026,
    excerpt: 'A survey offering a structured roadmap for moving LLM development from engineering heuristics toward a principled scientific discipline.',
    url:     'https://arxiv.org/abs/2601.02907',
  },
  {
    title:   'Information Gain-based Policy Optimization: A Simple and Effective Approach for Multi-Turn LLM Agents',
    authors: 'Guoqing Wang, Sunhao Dai, Guangze Ye, Zeyu Gan, Wei Yao, Yong Deng, Xiaofeng Wu, Zhenzhe Ying',
    venue:   'ICLR 2026',
    type:    'conference',
    year:    2026,
    excerpt: 'IGPO: a simple yet effective RL framework giving dense, intrinsic supervision for multi-turn agent training.',
    url:     'https://arxiv.org/abs/2510.14967',
  },
  {
    title:   'Why Does Reasoning Length Converge? Unveiling the Underfitting-Overfitting Trade-off in Chain-of-Thought',
    authors: 'Zeyu Gan, Hao Yi, Yong Liu',
    venue:   'arXiv 2025',
    type:    'preprint',
    year:    2025,
    excerpt: 'CoT-Space recasts LLM reasoning as continuous optimization, giving a coherent explanation for phenomena like overthinking.',
    url:     'https://arxiv.org/abs/2509.04027',
  },
  {
    title:   'Rethinking External Slow-Thinking: From Snowball Errors to Probability of Correct Reasoning',
    authors: 'Zeyu Gan, Yun Liao, Yong Liu',
    venue:   'ICML 2025',
    type:    'conference',
    year:    2025,
    excerpt: 'A theoretical analysis of external slow-thinking, linking snowball errors to reasoning accuracy and interpretability.',
    url:     'https://proceedings.mlr.press/v267/gan25a.html',
  },
  {
    title:   'Towards a Theoretical Understanding of Synthetic Data in LLM Post-Training: A Reverse-Bottleneck Perspective',
    authors: 'Zeyu Gan, Yong Liu',
    venue:   'ICLR 2025',
    type:    'conference',
    year:    2025,
    excerpt: 'Explores the role of synthetic data in LLM post-training through a novel reverse-bottleneck perspective.',
    url:     'https://arxiv.org/abs/2410.01720',
  },
  {
    title:   'Towards a Theoretical Understanding of Semi-Supervised Learning Under Class Distribution Mismatch',
    authors: 'Pan Du, Suyun Zhao, Puhui Tan, Zisen Sheng, Zeyu Gan, Hong Chen, Cuiping Li',
    venue:   'TPAMI 2025',
    type:    'journal',
    year:    2025,
    excerpt: 'Analyzes the excess risk between empirical and population-level optima for semi-supervised learning under class distribution mismatch.',
    url:     'https://dl.acm.org/doi/10.1109/TPAMI.2025.3545930',
  },
  {
    title:   'Superclass Learning with Representation Enhancement',
    authors: 'Zeyu Gan, Suyun Zhao, Jinlong Kang, Liyuan Shang, Hong Chen, Cuiping Li',
    venue:   'CVPR 2023',
    type:    'conference',
    year:    2023,
    excerpt: 'Introduces superclass learning and SCLRE, an attention-based framework for extracting superclass-aware representations.',
    url:     'https://openaccess.thecvf.com/content/CVPR2023/html/Kang_Superclass_Learning_With_Representation_Enhancement_CVPR_2023_paper.html',
  },
];

/* -----------------------------------------------------------------------------
 *  NEWS  — newest first.  ⚠️ These are seeded from your publications;
 *  please edit dates / wording to match real events.
 * --------------------------------------------------------------------------- */
const NEWS = [
  { date: 'Jun 2026', text: 'New preprint <em>"Local Harness"</em> on personal-agent architectures is out on arXiv.' },
  { date: 'Jan 2026', text: 'Our paper <em>IGPO</em> on multi-turn LLM agents was accepted to <strong>ICLR 2026</strong>! 🎉' },
  { date: 'Jan 2026', text: 'Released our survey <em>"Beyond the Black Box: A Survey on the Theory and Mechanism of LLMs"</em>.' },
  { date: 'Oct 2025', text: 'Preprint <em>IGPO</em> on multi-turn LLM agents is available.' },
  { date: 'Sep 2025', text: 'Preprint <em>CoT-Space</em> on chain-of-thought reasoning is available.' },
  { date: 'May 2025', text: 'Our paper on external slow-thinking was accepted to <strong>ICML 2025</strong>.' },
  { date: 'Jan 2025', text: 'Our paper on synthetic data was accepted to <strong>ICLR 2025</strong>.' },
];

/* -----------------------------------------------------------------------------
 *  EDUCATION  — newest first.
 * --------------------------------------------------------------------------- */
const EDUCATION = [
  { period: '2024 — 2028 (expected)', degree: 'Ph.D. in Artificial Intelligence',
    org: 'Gaoling School of AI, Renmin University of China' },
  { period: '2021 — 2024', degree: 'M.S. in Computer Application Technology',
    org: 'School of Information, Renmin University of China' },
  { period: '2017 — 2021', degree: 'B.S. in Computer Science',
    org: 'School of Information, Renmin University of China' },
];

/* -----------------------------------------------------------------------------
 *  SERVICE  — academic / professional service.
 *  Each entry: a role and the venues it applies to (shown as colored pills).
 * --------------------------------------------------------------------------- */
const SERVICE = [
  { role: 'Conference Reviewer', venues: ['ICLR', 'ICML', 'CVPR'] },
];
