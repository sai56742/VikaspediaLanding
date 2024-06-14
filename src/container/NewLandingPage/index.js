"use client";
import DynamicCardGrid from "./DynamicCardGrid";
import React, { useState, useRef } from "react"; // Import useState and useRef
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  IconButton,
  Popover,
  MenuList,
  MenuItem,
  Box,
  CardActions,
  Grid,
  Menu,
  CardHeader,
  Avatar,
  Divider,
  ListItemIcon,
  Rating,
  styled,
  Collapse,
  useMediaQuery,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  SpeedDial,
  SpeedDialAction,
  TextField,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert"; // Import MoreVertIcon
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import BlockIcon from "@mui/icons-material/Block";
import GradingIcon from "@mui/icons-material/Grading";
import IosShareIcon from "@mui/icons-material/IosShare";
import FlagIcon from "@mui/icons-material/Flag";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ShareIcon from "@mui/icons-material/Share";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Masonry } from "@mui/lab";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const initialAnimalData = [
  {
    animalName: "Tiger",
    likes: 10,
    linkUrl: "/similar-tigers",
    imageUrl: "https://source.unsplash.com/random?tiger",
    videoUrl: "https://static.vikaspedia.in/mediastorage/video/landingPage.mp4",
    description:
      "The majestic tiger, the largest of all wild cats, is known for its powerful build, striking stripes, and ferocious hunting skills.",
  },
  {
    animalName: "Lion",
    likes: 2,
    linkUrl: "/similar-lions",
    imageUrl: "https://source.unsplash.com/random?lion",
    description:
      "The social lion, king of the jungle, is renowned for its impressive mane, powerful roar, and cooperative hunting behavior.",
  },
  {
    animalName: "Elephant",
    likes: 5,
    linkUrl: "/similar-elephants",
    imageUrl: "https://source.unsplash.com/random?elephant",
    description:
      "The mighty elephant, the largest land animal on Earth, is known for its incredible intelligence, strong social bonds, and remarkable memory.",
  },
  {
    animalName: "Giraffe",
    likes: 7,
    linkUrl: "/similar-tigers",
    imageUrl: "https://source.unsplash.com/random?giraffe",
    description:
      "The towering giraffe, with its long neck and distinctive spots, is the tallest land animal alive, reaching heights of up to 19 feet.",
  },
  {
    animalName: "Zebra",
    likes: 2,
    linkUrl: "/similar-tigers",
    imageUrl: "https://source.unsplash.com/random?zebra",
    videoUrl: "https://static.vikaspedia.in/mediastorage/video/landingPage.mp4",

    description:
      "The zebra, a social equine with striking black and white stripes, is known for its speed, agility, and complex social interactions.",
  },
  {
    animalName: "Dolphin",
    likes: 8,
    linkUrl: "/similar-tigers",
    imageUrl: "https://source.unsplash.com/random?dolphin",
    description:
      "The playful dolphin, an intelligent marine mammal, is known for its acrobatic displays, social bonds, and echolocation abilities.",
  },
  {
    animalName: "Whale",
    likes: 10,
    linkUrl: "/similar-tigers",
    imageUrl: "https://source.unsplash.com/random?whale",
    description:
      "The magnificent whale, the largest animal on Earth, is a gentle giant known for its complex songs, long migrations, and filter-feeding habits.",
  },
  {
    animalName: "Kangaroo",
    likes: 11,
    linkUrl: "/similar-tigers",
    imageUrl: "https://source.unsplash.com/random?kangaroo",
    description:
      "The hopping kangaroo, a unique marsupial from Australia, is known for its powerful legs, pouch for carrying young, and social groups called mobs.",
  },
  {
    animalName: "Koala",
    likes: 5,
    linkUrl: "/similar-tigers",
    imageUrl: "https://source.unsplash.com/random?koala",
    description:
      "The cuddly koala, a marsupial native to Australia, is known for its eucalyptus-eating diet, slow movements, and arboreal lifestyle.",
  },
  {
    animalName: "Bear",
    likes: 7,
    linkUrl: "/similar-tigers",
    imageUrl: "https://source.unsplash.com/random?bear",
    description:
      "The powerful bear, a large omnivore found in various habitats, is known for its hibernation habits, keen sense of smell, and solitary nature.",
  },
];

// const ITEM_HEIGHT = 50;

function MultiActionAreaCard() {
  const [anchorElShare, setAnchorElShare] = React.useState(null);
  const [openDialog, setOpenDialog] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  // const [expandedIndex, setExpandedIndex] = React.useState(null);
  const [expanded, setExpanded] = useState(
    Array(initialAnimalData?.length).fill(false)
  );
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedAnimal, setSelectedAnimal] = React.useState(null);
  const [animalData, setAnimalData] = useState(initialAnimalData);
  const [rating, setRating] = React.useState(2);

  const handleExpandClick = (index) => {
    setExpanded(
      expanded.map((value, i) => {
        return i === index ? !value : false;
      })
    );
  };
  const open = Boolean(anchorEl);
  const handleClick = (event, animal) => {
    setAnchorEl(event.currentTarget);
    setSelectedAnimal(animal);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLike = (animalName) => {
    setAnimalData((prevAnimalData) =>
      prevAnimalData.map((animal) =>
        animal.animalName === animalName
          ? { ...animal, likes: animal.likes + 1 }
          : animal
      )
    );
  };

  const handleRatingChange = (event, animalName) => {
    const newRating = event.target.value;
    setAnimalData((prevAnimalData) =>
      prevAnimalData.map((animal) =>
        animal.animalName === animalName
          ? { ...animal, rating: newRating }
          : animal
      )
    );
  };

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + "...";
  };

  const handleClickShare = (event) => {
    setAnchorElShare(event.currentTarget);
  };

  const handleCloseShare = () => {
    setAnchorElShare(null);
  };
  const opensharepopup = Boolean(anchorElShare);
  const id = open ? "simple-popover" : undefined;

  function getRandomSize(index) {
    // Return size 6 for every third card, and size 3 for the rest
    return index % 4 === 0 ? 6 : 3;
  }

  return (
    <Grid container spacing={1} p={1}>
      {animalData.map((animal, index) => (
        <Grid
          item
          xs={12}
          sm={animal?.videoUrl ? 12 : 6}
          md={getRandomSize(index)}
          lg={getRandomSize(index)}
          // md={animal?.videoUrl ? 6 : 3}
          // lg={animal.videoUrl ? 6 : 3}
          key={`${index}-${animal.animalName}`}
          sx={{
            "&:hover img": {
              opacity: 1,
            },
            "& img": {
              transition: "opacity 0.3s ease",
              opacity: 0.6,
            },
          }}
        >
          <Card>
            <CardHeader
              action={
                <IconButton
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={(event) => handleClick(event, animal.animalName)}
                  aria-label="settings"
                >
                  <MoreVertIcon />
                </IconButton>
              }
              // title={animal?.animalName}
              title={
                <Typography variant="subtitle1">
                  {/* {animal?.description} */}
                  {truncateText(animal?.animalName, 100)}
                </Typography>
              }
            />

            <CardMedia
              component={animal.videoUrl ? "video" : "img"}
              height="200"
              src={animal.videoUrl ? animal.videoUrl : animal.imageUrl}
              alt={animal.animalName}
              controls={animal.videoUrl ? true : false}
              // component="img"
              // height="194"
              // image={animal.imageUrl}
              // alt="Paella dish"
            />

            <CardContent>
              <Typography
                sx={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
                variant="subtitle1"
              >
                {animal?.description}
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* <IconButton
                onClick={() => handleLike(animal.animalName)}
                aria-label="add to favorites"
              >
                <ThumbUpOffAltIcon />
              </IconButton>
              <Typography sx={{ mt: "8px" }}>{animal.likes}</Typography> */}
              <Rating
                name={`rating-${animal.animalName}`}
                value={animal.rating || rating}
                onChange={(event) =>
                  handleRatingChange(event, animal.animalName)
                }
              />
              <Typography sx={{ mt: "8px" }}> &nbsp;{animal.likes} </Typography>
              <IconButton onClick={handleClickOpenDialog} aria-label="share">
                <ChatBubbleOutlineIcon />
              </IconButton>
              <IconButton
                aria-describedby={id}
                variant="contained"
                onClick={handleClickShare}
              >
                <ShareIcon />
              </IconButton>
              <Popover
                id={id}
                open={opensharepopup}
                anchorEl={anchorElShare}
                onClose={handleCloseShare}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                PaperProps={{
                  style: {
                    // boxShadow: "none",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
                  },
                }}
              >
                <IconButton aria-label="youtube">
                  <WhatsAppIcon />
                </IconButton>
                <IconButton aria-label="instagram">
                  <InstagramIcon />
                </IconButton>
                <IconButton aria-label="twitter">
                  <XIcon />
                </IconButton>
                <IconButton aria-label="facebook">
                  <FacebookIcon />
                </IconButton>
                <IconButton aria-label="linkedin">
                  <LinkedInIcon />
                </IconButton>
              </Popover>

              <ExpandMore
                expand={expanded[index]}
                onClick={() => handleExpandClick(index)}
                aria-expanded={expanded[index]}
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </Box>
            <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="h6">
                  <strong> Description</strong>
                </Typography>
                <Typography paragraph>{animal?.description}</Typography>
                {animal.linkUrl && <a href={animal.linkUrl}>See more </a>}
              </CardContent>
            </Collapse>
          </Card>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={Boolean(anchorEl)}
            onClose={handleClose}
            onClick={handleClose}
            sx={{
              // boxShadow: "none",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
            }}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <AddCircleOutlineIcon fontSize="medium" />
              </ListItemIcon>
              Follow {selectedAnimal}
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <BlockIcon fontSize="medium" />
              </ListItemIcon>
              Block {selectedAnimal}
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <GradingIcon fontSize="medium" />
              </ListItemIcon>
              Manage interest
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <IosShareIcon fontSize="medium" />
              </ListItemIcon>
              share
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <FlagIcon fontSize="medium" />
              </ListItemIcon>
              Report an issue
            </MenuItem>
          </Menu>
        </Grid>
      ))}
      <Dialog
        fullScreen={fullScreen}
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"pleae share comment"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <TextField
              fullWidth
              id="comment"
              label="comment"
              variant="outlined"
              multiline
              rows={4}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" autoFocus onClick={handleCloseDialog}>
            send
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

export default function NewLandingPage() {
  return (
    <Box mt={5}>
      {/* <DynamicCardGrid /> */}
      <MultiActionAreaCard />
    </Box>
  );
}
