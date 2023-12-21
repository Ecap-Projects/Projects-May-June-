import Base from "../components/Base";
import userContext from "../context/userContext"

const Services = () => {
    const contactPersons = [
        { name: 'Tasleem', email: 'tasleem@example.com' },
        { name: 'Tejaswini', email: 'tejaswini@example.com' },
        { name: 'Shwetha', email: 'shwetha@example.com' },
        { name: 'Vikhyat', email: 'vikhyat@example.com' },
        { name: 'Shubham', email: 'shubham@example.com' },
        { name: 'Sunita', email: 'sunita@example.com' },
      ];
    
      return (
        <Base>
        <div>
          <h2>Contact Us</h2>
          {contactPersons.map((person, index) => (
            <div key={index} className="contact-person">
              <h3>{person.name}</h3>
              <p>Email: <a href={`mailto:${person.email}`}>{person.email}</a></p>
            </div>
          ))}
        </div>
        </Base>
      );
    // return (
    //     <userContext.Consumer>
    //         {
    //             (object) => (

    //                 <Base>
    //                     <h1>
    //                         This is services page
    //                     </h1>
    //                     <h1>Welcome {object.user.login && object.user.data.name}</h1>
    //                 </Base>
    //             )
    //         }
    //     </userContext.Consumer>
    // )
}

export default Services