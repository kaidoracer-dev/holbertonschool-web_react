interface MajorCredits {
  credits: number;
  _brand: 'major'; // la "marque"
}
interface MinorCredits {
  credits: number;
  _brand: 'minor';
}

function sumMajorCredits(s1: MajorCredits, s2: MajorCredits): MajorCredits {
  return { credits: s1.credits + s2.credits, _brand: 'major' };
}
