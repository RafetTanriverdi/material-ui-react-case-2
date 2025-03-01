import React from "react";
import { Card, CardContent, Typography, Divider, Grid } from "@mui/material"; // ✅ Grid için doğru import

interface DescriptionItem {
  label: string;
  value: React.ReactNode;
}

interface DescriptionProps {
  title?: string;
  data: DescriptionItem[];
  column?: number;
  bordered?: boolean;
}

const Description: React.FC<DescriptionProps> = ({
  title,
  data,
  column = 2,
  bordered = false,
}) => {
  return (
    <Card variant={bordered ? "outlined" : "elevation"}>
      <CardContent>
        {title && (
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            {title}
          </Typography>
        )}
        <Grid container spacing={2}>
          {data.map((item, index) => (
            <Grid key={index} item xs={12} sm={Math.floor(12 / column)}>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                style={{ cursor: "default" }}
              >
                {item.label}
              </Typography>
              <Typography variant="body1" style={{ cursor: "default" }}>
                {item.value}
              </Typography>
              {bordered && <Divider sx={{ mt: 1 }} />}
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Description;
