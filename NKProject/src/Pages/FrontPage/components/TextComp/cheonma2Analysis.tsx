import { Box, Typography, CssBaseline, Divider, Button, Grid } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';

const textHeader = "Ch’ŏnma-2, M2020";
const subTextHeader = `On the 10th of October 2020 marked the 75th Anniversary of the foundation of the Workers’ Party of Korea (WPK), the far-left party of the totalitarian one-party Democratic People’s Republic of Korea (DPRK). 
This took place in P’yŏngyang, the North Korean capital, through Kim Il-sung Square. During this parade, a
new Main Battle Tank (MBT) had appeared. The tank was completely different from North Korea's tradtional tank arsenal. So much in fact that has intrigued many military analysts and enthusiasts was seen for the first time and has aroused great interest.`;
const text_1 = 'Not much is known about this tank, even its name remains a point of contention. The namesake \"Ch’ŏnma-2\" was first observed through unofficial means by analyzing KCTV publications of Kim Jong Un inspecting this tank sometime around May 2024.'
const text_2 = 'The Ch’ŏnma-2 remains a largely new design with very little in common with previous MBTs developed in North Korea.'

export default function Cheonma2Analysis() {
    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                alignItems: "top",
                justifyContent: "center",
                boxSizing: "border-box",
                marginTop: "150px"
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
                    {textHeader} - At least 9 built
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
                        justifyContent: "center",
                        textAlign: "center",
                        height: 330,
                        width: 810,
                 
                    }}
                    src="src/Pages/FrontPage/components/TextComp/ImagesComp/M2020v1.png"
                />

                <Typography variant="subtitle1" sx={{ padding: "10px", margin: 0 }}>
                    {text_1}<br /><br />{text_2}
                </Typography>

                <Typography variant="h3" sx={{ padding: "10px", margin: 0 }}>
                    Overview
                </Typography>
                
                <Box
                    component="img"
                    sx={{
                        justifyContent: "center",
                        textAlign: "center",
                        height: 330,
                        width: 810,
                 
                    }}
                    src="src/Pages/FrontPage/components/TextComp/ImagesComp/M2020v1.png"
                />
                
            </Box>
        </Box>
    );
}
