import Post from './models/post';

export default function createFakeData() {
  const posts = [...Array(40).keys()].map(i => ({
    title: `포스트 #${i}`,
    body: 'Korean is spoken by about 63 million people in South Korea, North Korea, China, Japan, Uzbekistan, Kazakhstan and Russia. The relationship between Korean and other languages is not known for sure, though some linguists believe it to be a member of the Altaic family of languages. Grammatically Korean is very similar to Japanese and about 70% of its vocabulary comes from Chinese.',
    tags: ['가짜', '데이터']
  }))

  Post.insertMany(posts, (err, docs) => {console.log(docs)});
};

