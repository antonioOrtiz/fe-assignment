import AppliancePackage from '../components/AppliancePackage.jsx';
import axios from 'axios';
function HomePage(data) {
  console.log('data in homepage', data);
  return (
    <>
      <AppliancePackage appliances={data} />
    </>
  );
}

export default HomePage;

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  var res = await axios.get('https://demo3211013.mockable.io/ajmad');
  var res = JSON.parse(JSON.stringify(res.data));
  console.log('res ', res);

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data: res,
    },
  };
}
