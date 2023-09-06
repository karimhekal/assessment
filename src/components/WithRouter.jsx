import { useNavigate, useParams } from "react-router";

export default function withRouter(Component) {
    return props => <Component {...props} navigate={useNavigate()} params={useParams()} />;
}