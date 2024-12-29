// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";

import DMBox from "../../DmToolkit/DMBox";
import { useDMController } from "../../Context/Context";
import {
  collapseItem,
  collapseIconBox,
  collapseIcon,
  collapseText,
} from "./styles/sidenavCollapse";

import { useEffect, useState } from "react";
import transactionRoutes from "../../Routes/transactionRoutes";
import { Collapse, Divider, Link, List } from "@mui/material";
import { NavLink } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";

function SidenavCollapse({
  icon,
  name,
  active,
  title,
  key,
  collapseName,
  ...rest
}) {
  const [controller] = useDMController();
  const {
    miniSidenav,
    transparentSidenav,
    whiteSidenav,
    darkMode,
    sidenavColor,
  } = controller;

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (title !== "undefined") {
      console.log("oooooo");
      setOpen(!open);
    }
  };
  useEffect(() => {
    console.log("key", title);
  }, [title]);

  const renderTransactionRoutes = transactionRoutes.map(
    ({ type, name, icon, noCollapse, key, href, route }) => {
      let returnValue;

      if (type === "collapse") {
        returnValue = href ? (
          <Link
            href={href}
            key={key}
            target="_blank"
            rel="noreferrer"
            sx={{ textDecoration: "none" }}
          >
            <SidenavCollapse
              name={name}
              icon={icon}
              active={key === collapseName}
              noCollapse={noCollapse}
            />
          </Link>
        ) : (
          <NavLink key={key} to={route}>
            <SidenavCollapse
              name={name}
              icon={icon}
              active={key === collapseName}
            />
          </NavLink>
        );
      } else if (type === "divider") {
        returnValue = (
          <Divider
            key={key}
            light={
              (!darkMode && !whiteSidenav && !transparentSidenav) ||
              (darkMode && !transparentSidenav && whiteSidenav)
            }
          />
        );
      }

      return returnValue;
    }
  );

  const renderReportsRoutes = [];

  const renderMasterRoutes = [];

  return (
    <ListItem component="li">
      <DMBox
        {...rest}
        sx={(theme) =>
          collapseItem(theme, {
            active,
            transparentSidenav,
            whiteSidenav,
            darkMode,
            sidenavColor,
          })
        }
        onClick={() => handleClick()}
      >
        <ListItemIcon
          sx={(theme) =>
            collapseIconBox(theme, {
              transparentSidenav,
              whiteSidenav,
              darkMode,
              active,
            })
          }
        >
          {typeof icon === "string" ? (
            <Icon sx={(theme) => collapseIcon(theme, { active })}>{icon}</Icon>
          ) : (
            icon
          )}
        </ListItemIcon>

        <ListItemText
          primary={name}
          sx={(theme) =>
            collapseText(theme, {
              miniSidenav,
              transparentSidenav,
              whiteSidenav,
              active,
            })
          }
        />

        
       {(title == 'Master' || title == 'Transactions' || title == 'Reports')?<>
        {open ? <ExpandLess /> : <ExpandMoreIcon />}

        <Collapse component="li" in={open} timeout="auto" unmountOnExit sx={{}}>
          {/* <ListItem disablePadding> */}
          {title === "Masters" ? (
            <ListItemText sx={{ pl: 0 }}>{renderMasterRoutes}</ListItemText>
          ) : title === "Transactions" ? (
            <ListItemText sx={{ p: 0 }}>{renderTransactionRoutes}</ListItemText>
          ) : (
            <ListItemText sx={{ p: 0 }}>{renderReportsRoutes}</ListItemText>
          )}
          {/* </ListItem> */}
        </Collapse>
        </>:<></>}
      </DMBox>
    </ListItem>
  );
}

// Setting default values for the props of SidenavCollapse
SidenavCollapse.defaultProps = {
  active: false,
};

// Typechecking props for the SidenavCollapse
SidenavCollapse.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export default SidenavCollapse;
