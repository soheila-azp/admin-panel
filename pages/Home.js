import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
} from "reactstrap";
import {landingReport} from "../Services/Api/Course";
import { useQuery } from '@tanstack/react-query'
import {CardCongratulations} from "./dashboard/CardCongratulations"
import {SubscribersGained1} from "./dashboard/SubscribersGained1"
import {SubscribersGained2} from "./dashboard/SubscribersGained2"
import {SupportTracker1} from "./dashboard/SupportTracker1"
import {SupportTracker2} from "./dashboard/SupportTracker2"
const Home = () => {
  const report = useQuery({
    queryKey:["landingReport"],
    queryFn: landingReport,
  })
  console.log("report", report.data);
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Kick start your project 🚀</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>All the best for your new project.</CardText>
          <CardText>
            Please make sure to read our{" "}
            <CardLink
              href="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/"
              target="_blank"
            >
              Template Documentation
            </CardLink>{" "}
            to understand where to go from here and how to use our template.
          </CardText>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Want to integrate JWT? 🔒</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            We carefully crafted JWT flow so you can implement JWT with ease and
            with minimum efforts.
          </CardText>
          <CardText>
            Please read our{" "}
            <CardLink
              href="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/docs/development/auth"
              target="_blank"
            >
              JWT Documentation
            </CardLink>{" "}
            to get more out of JWT authentication.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Home;
