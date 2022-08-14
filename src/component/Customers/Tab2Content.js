const Name = [
  "Flex Roye",
  "Sachin",
  "Shrilakshmi",
  "Shrihari",
  "Tapas",
  "Koustov",
  "Vishal"
];

const Company = [
  "Google",
  "Microfocus",
  "Microfocus",
  "Microfocus",
  "Microfocus",
  "Microfocus",
  "Microfocus"
];

const Email = [
  "FlexRoye.gmail.com",
  "sachin.gmail.com",
  "shrilakshmi.gmail.com",
  "shrihari.gmail.com",
  "tapas.gmail.com",
  "k.gmail.com",
  "v.gmail.com",
];

const Tab2Content = () => {
  return (
    <div className="tab1Container">
      <div>
        <p className="title">Name</p>
        <div className="innerTabContent">
          {
            Name.map((value, index) => {
              return (
                <div className="iconWrapper" key={value + index}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="icon bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                  </svg>
                  <p className="name">{value}</p>
                </div>
              );
            })
          }
        </div>
      </div>
      <div>
        <p className="title">Company</p>
        <div className="innerTabContent">
          {
            Company.map((value, index) => {
              return (
                <div className="iconWrapper" key={value + index}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="icon bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                  </svg>
                  <p className="name">{value}</p>
                </div>
              );
            })
          }
        </div>
      </div>
      <div>
        <p className="title">Email</p>
        <div className="innerTabContent">
          {
            Email.map((value, index) => {
              return (
                <p style={{ marginTop: 0 }} key={value + index}>{value}</p>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}
export default Tab2Content;