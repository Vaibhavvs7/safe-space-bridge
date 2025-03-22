
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-wellness-gradient p-4">
      <div className="text-center glass-effect p-12 max-w-md animate-fade-in">
        <h1 className="text-6xl font-bold mb-4 text-gradient">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Oops! We couldn't find this page</p>
        <Button 
          onClick={() => navigate('/')}
          className="bg-wellness-600 hover:bg-wellness-700 text-white px-6"
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
