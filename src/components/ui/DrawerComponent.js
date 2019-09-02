import React from "react"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import CssBaseline from "@material-ui/core/CssBaseline"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import { Link } from "gatsby"
import { TranslationContext } from "../context/TranslationContext"
import Translator from "./LanguageComponent"
import "../../assets/scss/main.scss"

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}))

export default function PersistentDrawerLeft() {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  function handleDrawerOpen() {
    setOpen(true)
  }

  function handleDrawerClose() {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className="navbar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className="title">
            CrossFire
          </Typography>
          <div className="scroll-targets">
            <h1 className="navbar-title">
              <Link to="/#section1" className="nav-link">
                <Typography variant="h6" noWrap>
                  Trailer
                </Typography>
              </Link>
            </h1>
            <h1 className="navbar-title">
              <Link to="/#section2" className="nav-link">
                <Typography variant="h6" noWrap>
                  Cast
                </Typography>
              </Link>
            </h1>
            <h1 className="navbar-title">
              <Link to="/#section3" className="nav-link">
                <Typography variant="h6" noWrap>
                  Production
                </Typography>
              </Link>
            </h1>
            <h1 className="navbar-title">
              <Link to="/#section4" className="nav-link">
                <Typography variant="h6" noWrap>
                  Contact
                </Typography>
              </Link>
            </h1>
          </div>
          <div className="social-translate">
            <a
              target="_blank"
              href="https://www.instagram.com/official.crossfire.film/?hl=en"
            >
              <img
                src={require("../../assets/images/instagram.png")}
                className="navIcon"
              />
            </a>
            <div className="translation-button">
              <TranslationContext.Consumer>
                {({ en, handleSubmit }) => {
                  return (
                    <Translator
                      en={en}
                      handleSubmit={handleSubmit}
                      className="en-de"
                    />
                  )
                }}
              </TranslationContext.Consumer>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemText>
              <Link to="/#section1" className="nav-link">
                <Typography variant="h6" noWrap>
                  Trailer
                </Typography>
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>
              <Link to="/#section2" className="nav-link">
                <Typography variant="h6" noWrap>
                  Cast
                </Typography>
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>
              <Link to="/#section3" className="nav-link">
                <Typography variant="h6" noWrap>
                  Production
                </Typography>
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>
              <Link to="/#section4" className="nav-link">
                <Typography variant="h6" noWrap>
                  Contact
                </Typography>
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  )
}
