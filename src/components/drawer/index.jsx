import { useCallback, useEffect, useRef, useState} from "react"
import { Drawer } from "@mui/material";
import { useRouter } from "next/router"

const Container = ({ anchor, children, id, closeHandler, drawerPaper, drawerRoot, openHandler, onCloseHelper }) => {
    const [ open, setOpen ] = useState(false);

    const router = useRouter();
    const { pathname } = router;
    const currentPath = useRef(null);

    const onOpen = useCallback(() => setOpen(true), []);
    const onClose = useCallback(() => {
        setOpen(false);
        if(onCloseHelper) onCloseHelper();
    }, [ onCloseHelper ]);

    useEffect(() => {
        if(closeHandler) closeHandler.current = onClose;
    }, [ onClose, closeHandler ])

    useEffect(() => {
        if(openHandler) openHandler.current = onOpen;
    }, [ onOpen, openHandler ]);

    useEffect(() => {
        if(pathname !== currentPath.current) {
            setOpen(false);
            return;
        }
        currentPath.current = pathname;
    }, [ pathname ]);

    return (
        <Drawer
            anchor={anchor ?? "right"}
            id={id}
            open={open}
            onClose={onClose}
            classes={{ paper: drawerPaper, root: drawerRoot }}>
            { children }
        </Drawer>
    );
};

export default Container;