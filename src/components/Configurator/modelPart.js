import { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations, Html, useCursor } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

export const ModelRender = (props) => {
    const ref = useRef()

    const fullBoat = useGLTF('./model/FullBoat.glb')
    const backTube = useGLTF('./model/BackTube.glb')
    const BoatCoverAnim = useGLTF('./model/BoatCoverAnim.glb')
    const dingyWheels = useGLTF('./model/DingyWheelsAnim.glb')
    const fishPoleHolder = useGLTF('./model/FishPoleHolder.glb')
    const scubaTank = useGLTF('./model/ScubaTank.glb')
    const suspendedBag = useGLTF('./model/SuspendedBag.glb')
    const engine = useGLTF('./model/Engine.glb')
    const boatFabricCover = useGLTF('./model/BoatFabricCover.glb')


    const centerSitSimple = useGLTF('./model/CenterSitSimple.glb')
    const backSitSimple = useGLTF('./model/BackSitSimple.glb')
    const frontSitSimple = useGLTF('./model/FrontSitSimple.glb')
    const frontDeluxe = useGLTF('./model/FrontDeluxe.glb')
    const centerDeluxe = useGLTF('./model/CenterDeluxe.glb')
    const backDeluxe = useGLTF('./model/BackDeluxe.glb')


    const BoatCoverAnimActions = useAnimations(BoatCoverAnim.animations, BoatCoverAnim.scene).actions["BoatFrontCoverAction"];
    const dingyWheelsActions = useAnimations(dingyWheels.animations, dingyWheels.scene).actions;

    const backTubeActions = useAnimations(backTube.animations, backTube.scene).actions["pCube35Action"];
    const frontDeluxeActions = useAnimations(frontDeluxe.animations, frontDeluxe.scene).actions["pCube13Action"];
    const centerDeluxeActions = useAnimations(centerDeluxe.animations, centerDeluxe.scene).actions["pCube13Action.001"];
    const backDeluxeActions = useAnimations(backDeluxe.animations, backDeluxe.scene).actions["pCube13Action.002"];
    useEffect(() => {
        frontDeluxeActions.play()
        frontDeluxeActions.setLoop(1, 1)
        frontDeluxeActions.clampWhenFinished = true;

        centerDeluxeActions.play()
        centerDeluxeActions.setLoop(1, 1)
        centerDeluxeActions.clampWhenFinished = true;

        backDeluxeActions.play()
        backDeluxeActions.setLoop(1, 1)
        backDeluxeActions.clampWhenFinished = true;



        BoatCoverAnimActions.play()
        BoatCoverAnimActions.setLoop(1, 1)
        BoatCoverAnimActions.clampWhenFinished = true;

        backTubeActions.play()
        backTubeActions.setLoop(1, 1)
        backTubeActions.clampWhenFinished = true;

        dingyWheelsActions["polySurface189Action"].play()
        dingyWheelsActions["polySurface189Action"].setLoop(1, 1)
        dingyWheelsActions["polySurface189Action"].clampWhenFinished = true;
        dingyWheelsActions["pCube49Action"].play()
        dingyWheelsActions["pCube49Action"].setLoop(1, 1)
        dingyWheelsActions["pCube49Action"].clampWhenFinished = true;

    }, []);

    useEffect(() => {
        dingyWheelsActions["polySurface189Action"].reset()
        dingyWheelsActions["pCube49Action"].reset()
    }, [props.accesoryVisibilities.wheel]);

    useEffect(() => {
        frontDeluxeActions.reset()
    }, [props.accesoryVisibilities.forwardDeluxe]);

    useEffect(() => {
        centerDeluxeActions.reset()
    }, [props.accesoryVisibilities.centerDeluxe]);

    useEffect(() => {
        backDeluxeActions.reset()
    }, [props.accesoryVisibilities.rearDeluxe]);

    useEffect(() => {
        backTubeActions.reset()
    }, [props.accesoryVisibilities.guard]);

    // useFrame((state) => {
    //     const t = state.clock.getElapsedTime()
    //     ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 3) / 4, 0.15 + Math.sin(t / 2) / 8)
    //     ref.current.position.y = (0.5 + Math.cos(t / 2)) / 7
    // })

    useFrame(() => {
    })


    const [hovered, set] = useState()
    useCursor(hovered, /*'pointer', 'auto', document.body*/)

    return (
        <group ref={ref}>
            <primitive object={fullBoat.scene} />
            {/* <primitive object={engine.scene} /> */}
            <primitive object={boatFabricCover.scene} visible={props.accesoryVisibilities.canvas} />
            <primitive scale={0.008} rotation={[0, Math.PI / 2, 0]} position={[-0.232, 0.209, -0.651]} object={scubaTank.scene} visible={props.accesoryVisibilities.scuba} />
            <primitive object={fishPoleHolder.scene} visible={props.accesoryVisibilities.holder} />
            <primitive object={suspendedBag.scene} visible={props.accesoryVisibilities.bag} />
            <primitive object={centerSitSimple.scene} visible={props.accesoryVisibilities.centerStandard} />
            <primitive object={frontSitSimple.scene} visible={props.accesoryVisibilities.forwardStandard} />
            <primitive object={backSitSimple.scene} visible={props.accesoryVisibilities.rearStandard} />
            <primitive
                object={backTube.scene}
                visible={props.accesoryVisibilities.guard}
                onPointerOver={() => set(true)}
                onPointerOut={() => set(false)}
                onClick={(e) => {
                    e.stopPropagation();
                    backTubeActions.timeScale = backTubeActions.timeScale === 1 ? -1 : 1;
                    backTubeActions.reset()
                }}
            />
            <primitive
                object={centerDeluxe.scene}
                visible={props.accesoryVisibilities.centerDeluxe}
                onPointerOver={() => set(true)}
                onPointerOut={() => set(false)}
                onClick={(e) => {
                    e.stopPropagation();
                    centerDeluxeActions.timeScale = centerDeluxeActions.timeScale === 1 ? -1 : 1;
                    centerDeluxeActions.reset();
                }}
            />
            <primitive
                object={frontDeluxe.scene}
                visible={props.accesoryVisibilities.forwardDeluxe}
                onPointerOver={() => set(true)}
                onPointerOut={() => set(false)}
                onClick={(e) => {
                    frontDeluxeActions.reset()
                    e.stopPropagation();
                    frontDeluxeActions.timeScale = frontDeluxeActions.timeScale === 1 ? -1 : 1;
                }}
            />
            <primitive
                object={backDeluxe.scene}
                visible={props.accesoryVisibilities.rearDeluxe}
                onPointerOver={() => set(true)}
                onPointerOut={() => set(false)}
                onClick={(e) => {
                    backDeluxeActions.reset()
                    e.stopPropagation();
                    backDeluxeActions.timeScale = backDeluxeActions.timeScale === 1 ? -1 : 1;
                }}
            />
            <primitive
                object={dingyWheels.scene}
                visible={props.accesoryVisibilities.wheel}
                onPointerOver={() => set(true)}
                onPointerOut={() => set(false)}
                onClick={(e) => {
                    e.stopPropagation();
                    dingyWheelsActions["polySurface189Action"].reset()
                    dingyWheelsActions["polySurface189Action"].timeScale = dingyWheelsActions["polySurface189Action"].timeScale === 1 ? -1 : 1;
                    dingyWheelsActions["pCube49Action"].reset()
                    dingyWheelsActions["pCube49Action"].timeScale = dingyWheelsActions["polySurface189Action"].timeScale === 1 ? -1 : 1;
                }}
            />
            <primitive object={BoatCoverAnim.scene}
                onPointerOver={() => set(true)}
                onPointerOut={() => set(false)}
                onClick={(e) => {
                    BoatCoverAnimActions.reset()
                    e.stopPropagation();
                    BoatCoverAnimActions.timeScale = BoatCoverAnimActions.timeScale === 1 ? -1 : 1;
                }}

            />
        </group>
    )
}

useGLTF.preload('./model/FullBoat.glb')
useGLTF.preload('./model/BackTube.glb')
useGLTF.preload('./model/BoatCoverAnim.glb')
useGLTF.preload('./model/DingyWheelsAnim.glb')
useGLTF.preload('./model/FishPoleHolder.glb')
useGLTF.preload('./model/ScubaTank.glb')
useGLTF.preload('./model/SuspendedBag.glb')
useGLTF.preload('./model/Engine.glb')
useGLTF.preload('./model/BoatFabricCover.glb')

useGLTF.preload('./model/CenterDeluxe.glb')
useGLTF.preload('./model/CenterSitSimple.glb')
useGLTF.preload('./model/FrontDeluxe.glb')
useGLTF.preload('./model/FrontSitSimple.glb')
useGLTF.preload('./model/BackSitSimple.glb')
useGLTF.preload('./model/BackDeluxe.glb')

