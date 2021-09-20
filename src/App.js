import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Card from "./components/Card";

function App() {
  const data = [
    {
      subscription: "Free",
      price: "$0",
      includes: [
        {
          include: "Single User",
          flag: true,
        },
        {
          include: "5GB Storage",
          flag: true,
        },
        {
          include: "Unlimited Public Projects",
          flag: true,
        },
        {
          include: "Community Access",
          flag: true,
        },
        {
          include: "Unlimited Private Projects",
          flag: false,
        },
        {
          include: "Dedicated Phone Support",
          flag: false,
        },
        {
          include: "Free Subdomain",
          flag: false,
        },
        {
          include: "Monthly Status Reports",
          flag: false,
        },
      ],
    },
    {
      subscription: "Plus",
      price: "$9",
      includes: [
        {
          include: "5 Users",
          flag: true,
          dark: "bold"
        },
        {
          include: "50GB Storage",
          flag: true,
        },
        {
          include: "Unlimited Public Projects",
          flag: true,
        },
        {
          include: "Community Access",
          flag: true,
        },
        {
          include: "Unlimited Private Projects",
          flag: true,
        },
        {
          include: "Dedicated Phone Support",
          flag: true,
        },
        {
          include: "Free Subdomain",
          flag: true,
        },
        {
          include: "Monthly Status Reports",
          flag: false,
        },
      ],
    },
    {
      subscription: "Pro",
      price: "$49",
      includes: [
        {
          include: "Single User",
          flag: true,
          dark:"bold"
        },
        {
          include: "150GB Storage",
          flag: true,
        },
        {
          include: "Unlimited Public Projects",
          flag: true,
        },
        {
          include: "Community Access",
          flag: true,
        },
        {
          include: "Unlimited Private Projects",
          flag: true,
        },
        {
          include: "Dedicated Phone Support",
          flag: true,
        },
        {
          include: "Unlimited Free Subdomains",
          flag: true,
          dark: "bold"
        },
        {
          include: "Monthly Status Reports",
          flag: true,
        },
      ],
    },
  ];
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
         {
           data.map((ele, value) => {
             return (
              <div className="col-lg-4" key={value}>
                <Card includes = {ele.includes} subscription = {ele.subscription} price = {ele.price}/>
                </div>
             )
           })
         }
        </div>
      </div>
    </section>
  );
}

export default App;
