import React, { useState } from "react";
import { Layout, SettingToggle, TextStyle } from "@shopify/polaris";

const Install = () => {
  const [active, setActive] = useState(false);
  const contentStatus = active ? "Desactivar" : "Activar";
  const textStatus = active ? "activo" : "inactivo";

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <Layout.AnnotatedSection
      title="Activar Modal"
      description="Click en Activar/Desactivar para hacer visible el modal"
    >
      <SettingToggle
        action={{ content: contentStatus, onAction: handleClick }}
        enabled={active}
      >
        El modal esta <TextStyle variation="strong">{textStatus}</TextStyle>
      </SettingToggle>
    </Layout.AnnotatedSection>
  );
};

export default Install;
