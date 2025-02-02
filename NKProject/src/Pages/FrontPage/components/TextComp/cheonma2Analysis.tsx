import { Box, Typography, CssBaseline, Divider, Button, Grid } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';

const textHeader = "Ch’ŏnma-2, M2020";
const subTextHeader = `On the 10th of October 2020 marked the 75th Anniversary of the foundation of the Workers’ Party of Korea (WPK), the far-left party of the totalitarian one-party Democratic People’s Republic of Korea (DPRK). 
This took place in P’yŏngyang, the North Korean capital, through Kim Il-sung Square. During this parade, a plethora of new armored vehicles were paraded across the square, 
a new Main Battle Tank (MBT) had appeared. The tank was completely different from North Korea's tradtional tank arsenal. So much in fact that has intrigued many military analysts and enthusiasts was seen for the first time and has aroused great interest.`;

export default function Cheonma2Analysis() {
    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                alignItems: "top",
                justifyContent: "center",
                padding: "20px",
                boxSizing: "border-box",
            }}
        >
            <CssBaseline />
            <Box
                sx={{
                    maxWidth: "800px",
                    textAlign: "left",
                    margin: "0 auto",
                    color: "primary.main",
                }}
            >
                <Typography variant="h3" gutterBottom sx={{ padding: "10px", margin: 0 }}>
                    {textHeader}
                </Typography>

                <Divider
                    sx={{
                        backgroundColor: "primary.main", // Use global theme's primary color
                        margin: "10px 0",
                        height: "1px",
                    }}
                />
                <Typography variant="subtitle1" sx={{ padding: "10px", margin: 0 }}>
                    {subTextHeader}
                </Typography>

                <Box
                    component="img"
                    sx={{
                        height: 233,
                        width: 350,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="The house from the offer."
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                />
            </Box>
        </Box>
    );
}
