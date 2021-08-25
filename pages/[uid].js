function UserIdPage(props) {
  
  return (
  <>
<div className="container center">

    	<h1>Upcoming Content: </h1>  
	<h2>September 2021 - January 2022</h2>
        <h4 className="description">Environmental Consulting & Workshops</h4>
	<ul>
	<dt>Workshops</dt>
	<dd>Invitation to Collaborate</dd>
	<dd>Invitation à collaborer</dd>
	<dd>Sustainability & Development</dd>
	<dd>Développement durable et développement</dd>
	<dd>Beyond the SDGs</dd>
	<dd>Au-delà des ODDs</dd>
	<dd>Data Science</dd>
	<dd>Science des données</dd>
	<dd>Story Map</dd>
	<dd>Carte de l'histoire</dd>
	<dd>Eco Web Development</dd>
	<dd>Développement Web Éco</dd>
	<dt>Environmental Consulting</dt>
	<dd>Climate Action Plans</dd>
	<dd>Plans d'Action Climate</dd>
	</ul>
  
{/*   <h1>{props.id}</h1> */}
</div>


  </>
  );
}

export default UserIdPage;

export async function getServerSideProps(context) {
  const { params } = context;

  const userId = params.uid;

  return {
    props: {
      id: 'userid-' + userId,
    },
  };
}
