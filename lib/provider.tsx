"use client";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProgressBar } from "next-nprogress-bar";


const client = new ApolloClient({
  uri: "https://yandex.hitchmi.com",
  cache: new InMemoryCache(),
});

const Providers = ({ children }: { children: React.ReactNode }) => {




  return (
    <ApolloProvider client={client}>      
      <TooltipProvider
        disableHoverableContent
        delayDuration={500}
        skipDelayDuration={0}
      >
        {children}
        <AppProgressBar
          height="4px"
          color="#ca0000"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </TooltipProvider>
      {/* </ThemeProvider> */}
    </ApolloProvider>
  );
};

export default Providers;