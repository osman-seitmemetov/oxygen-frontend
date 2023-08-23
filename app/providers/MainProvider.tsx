import {TypeComponentAuthFields} from "@/types/authProvider";
import {FC} from "react";
import {Provider} from "react-redux";
import {store} from "@/store/store";
import AuthProvider from "./AuthProvider/AuthProvider";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import {QueryClient, QueryClientProvider} from "react-query";
import {ThemeProvider} from "next-themes";
import HeadProvider from "./HeadProvider/HeadProvider";
import ReduxToastr from "@/components/UI/ReduxToastr/ReduxToastr";


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
})

const MainProvider: FC<TypeComponentAuthFields> = ({children, Component}) => {
    return (
        <HeadProvider>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <ThemeProvider defaultTheme="light">
                        <AuthProvider Component={Component}>
                            <ReduxToastr/>
                            {children}
                            <MobileMenu/>
                        </AuthProvider>
                    </ThemeProvider>
                </QueryClientProvider>
            </Provider>
        </HeadProvider>
    )
}

export default MainProvider;