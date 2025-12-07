// src/components/ProjectBox.tsx
import React from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Box } from "@mui/material";

interface Props {
  photo: string;
  name: string;
  github?: string;
  website?: string;
  desc?: string;
}

export default function ProjectBox({ photo, name, github, website, desc }: Props) {
  return (
    <Card sx={{ background: "rgba(26,26,26,0.8)", borderRadius: 2 }}>
      {photo && <CardMedia component="img" image={photo} alt={name} sx={{ height: 240 }} />}
      <CardContent>
        <Typography variant="h6" sx={{ color: "#00D9FF" }}>{name}</Typography>
        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>{desc}</Typography>
      </CardContent>
      <CardActions>
        {website && <Button size="small" href={website} target="_blank">Demo</Button>}
        {github && <Button size="small" href={github} target="_blank">Code</Button>}
      </CardActions>
    </Card>
  );
}
