const sentence = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

const cleanedSentence = sentence.replace(/[%@$&#;!]/g, '');

console.log(cleanedSentence);