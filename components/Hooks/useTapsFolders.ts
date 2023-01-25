import React, { useState } from "react";

const useTapsFolders = () => {
  const [isOpen, setIsOpen] = useState({ i: 0, open: false, menu: "" });
  const [submenuName, setSubmenuName] = useState("");

  return { isOpen, setIsOpen, submenuName, setSubmenuName };
};

export default useTapsFolders;
