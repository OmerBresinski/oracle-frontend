import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { KeysContextProvider } from "contexts/KeysContextProvider";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";
import * as P from "pages";
import * as C from "constant";

const AppRouter = () => {
  return (
    <ThemeProvider>
      <Router>
        <NavBar />
        <Switch>
          <KeysContextProvider>
            <Route exact path={C.ROUTES.home} component={P.Home} />
            <Route exact path={C.ROUTES.neworder} component={P.NewOrder} />
            <Route exact path={C.ROUTES.cancelorder} component={P.CancelOrder} />
            <Route exact path={C.ROUTES.inventoryreport} component={P.InventoryReport} />
            <Route
              exact
              path={C.ROUTES.openordersreport}
              component={P.OpenOrdersReport}
            />
            <Route
              exact
              path={C.ROUTES.transactionsreport}
              component={P.TransactionsReport}
            />
            <Route exact path={C.ROUTES.salesreport} component={P.SalesReport} />
            {/*<Route exact path={C.ROUTES.items} component={P.Items} /> */}
            <Route exact path={C.ROUTES.customers} component={P.Customers} />
            {/* <Route exact path={C.ROUTES.inventory} component={P.Inventory} />
            <Route exact path={C.ROUTES.orders} component={P.Orders} />
            <Route exact path={C.ROUTES.orderitems} component={P.OrderItems} />
            <Route exact path={C.ROUTES.receiptitems} component={P.ReceiptItems} />
            <Route exact path={C.ROUTES.receipts} component={P.Receipts} />
            <Route exact path={C.ROUTES.transactions} component={P.Transactions} />
            <Route exact path={C.ROUTES.warehouse} component={P.Warehouse} /> */}
            {/* <Route
              exact
              path={C.ROUTES.inventoryinsufficiency}
              component={P.InventoryInsufficiency}
            /> */}
          </KeysContextProvider>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
