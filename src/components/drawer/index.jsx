import { useCallback, useEffect, useState} from "react"
import { Drawer } from "@mui/material"

const Container = ({ anchor, children, id, closeHandler, drawerPaper, drawerRoot, openHandler, onCloseHelper }) => {
    const [ open, setOpen ] = useState(false);

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