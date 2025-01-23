import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DialogActionTrigger,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";

const CookieAccept = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsOpen(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsOpen(false);
    window.location.href = "https://www.google.com";
  };

  return (
    <DialogRoot
      motionPreset="slide-in-bottom"
      closeOnEscape={false}
      closeOnInteractOutside={false}
      defaultOpen={isOpen}
    >
      <DialogTrigger asChild>
        <Button variant="outline">Slide in Bottom</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            We use cookies to improve your experience on our website.
          </DialogTitle>
        </DialogHeader>
        <DialogBody>
          <p>
            Please use the buttons below to accept or reject our use of cookies.
            For more information, please read our{" "}
            <Link
              color={"black"}
              to="/cookies"
              style={{ textDecoration: "none" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.textDecoration = "underline")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.textDecoration = "none")
              }
            >
              Cookie Policy
            </Link>{" "}
            .
          </p>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline" onClick={handleAccept}>
              Accept
            </Button>
          </DialogActionTrigger>
          <Button onClick={handleReject}>Reject</Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
};

export default CookieAccept;
