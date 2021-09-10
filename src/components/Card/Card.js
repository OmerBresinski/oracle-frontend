import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MuiCard from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextInput from "components/TextInput";
import * as C from "constant";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginTop: 10,
    marginBottom: 2,
    fontSize: 14,
  },
});

const Card = ({ id, header, body, onAddClick }) => {
  const classes = useStyles();
  const [amount, setAmount] = useState(0);

  const handleClick = () => {
    amount && onAddClick && onAddClick(id, amount);
    setAmount(0);
  };

  const handleAmountChange = ({ value }) => {
    setAmount(+value);
  };

  return (
    <MuiCard className={classes.root}>
      <CardContent>
        <Typography className={classes.pos} color="textSecondary">
          Name
        </Typography>
        <Typography variant="h5" component="h2">
          {header}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Description
        </Typography>
        <Typography variant="body2" component="p">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>
          Add
        </Button>
        <TextInput
          label={"Amount"}
          size={C.SIZE.small}
          value={amount}
          type={"number"}
          onChange={handleAmountChange}
        />
      </CardActions>
    </MuiCard>
  );
};

export default Card;
