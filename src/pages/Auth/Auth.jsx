import Navbar from "../../components/Navbar";
import EmailVerification from "./EmailVerification";
import Register from "./Register";

export default function Auth() {
    return (
        <main>
            {/* Navbar section */}
            <div className="mt-16">
                <Navbar />
            </div>

            {/* Temporary container */}
            <div className="mt-24 flex flex-col gap-16">
                <Register />
                <EmailVerification />
            </div>

        </main>
    )
}