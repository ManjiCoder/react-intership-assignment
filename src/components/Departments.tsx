import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Checkbox,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

interface Department {
  department: string;
  sub_departments: string[];
}

const departmentData: Department[] = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
];

export default function BasicAccordion() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleToggle = (
    item: string,
    department: string,
    subDept: string[]
  ) => {
    let newSelected: string[] = [...selectedItems];

    // For Removing Checked Item
    if (newSelected.includes(item)) {
      newSelected = newSelected.filter((selectedItem) => selectedItem !== item);
    }
    // For Adding Checked Item
    else {
      newSelected.push(item);
      const allChecked: boolean[] = subDept.map((value) =>
        newSelected.includes(value)
      );
      if (!allChecked.includes(false)) {
        newSelected.push(department);
      }
    }

    setSelectedItems(newSelected);
  };

  const handleToggleDept = (item: string, arr: string[]) => {
    let newSelected: string[] = [...selectedItems];
    // For Removing Checked Item
    if (newSelected.includes(item)) {
      newSelected = newSelected.filter((selectedItem) => selectedItem !== item);
      newSelected = newSelected.filter(
        (selectedItem) => !arr.includes(selectedItem)
      );
    }
    // For Adding Checked Item
    else {
      newSelected.push(...arr, item);
    }
    setSelectedItems(newSelected);
  };

  const isSelected = (item: string) => selectedItems.includes(item);

  return (
    <div>
      <h1>Select the Fields</h1>
      {departmentData.map(({ department, sub_departments }) => (
        <Accordion key={department}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <List sx={{ margin: 0, padding: 0 }}>
              <ListItem
                onClick={() => handleToggleDept(department, sub_departments)}
              >
                <Checkbox
                  checked={
                    isSelected(department) && sub_departments.every(isSelected)
                  }
                  tabIndex={-1}
                  disableRipple
                />
                <ListItemText primary={department} />
              </ListItem>
            </List>
          </AccordionSummary>

          <AccordionDetails>
            <Collapse in={true} timeout="auto" unmountOnExit>
              {sub_departments.map((subDept) => (
                <ListItemButton
                  key={subDept}
                  onClick={() =>
                    handleToggle(subDept, department, sub_departments)
                  }
                >
                  <Checkbox
                    checked={selectedItems.includes(subDept)}
                    tabIndex={-1}
                    disableRipple
                  />
                  <ListItemText primary={subDept} />
                </ListItemButton>
              ))}
            </Collapse>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
