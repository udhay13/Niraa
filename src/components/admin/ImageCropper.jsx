import { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import getCroppedImg from '../../utils/cropUtils';
import { X, Check } from 'lucide-react';

const ImageCropper = ({ imageSrc, onCropComplete, onCancel }) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    const onCropChange = (crop) => {
        setCrop(crop);
    };

    const onZoomChange = (zoom) => {
        setZoom(zoom);
    };

    const onCropCompleteHandler = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const handleSave = async () => {
        try {
            const croppedImageBlob = await getCroppedImg(imageSrc, croppedAreaPixels);
            onCropComplete(croppedImageBlob);
        } catch (e) {
            console.error(e);
            alert("Cropping failed");
        }
    };

    return (
        <div className="cropper-modal" style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex',
            flexDirection: 'column', padding: '20px'
        }}>
            <div className="cropper-interaction" style={{ position: 'relative', flex: 1, borderRadius: '8px', overflow: 'hidden', background: '#333' }}>
                <Cropper
                    image={imageSrc}
                    crop={crop}
                    zoom={zoom}
                    aspect={16 / 9} // Blog aspect ratio
                    onCropChange={onCropChange}
                    onZoomChange={onZoomChange}
                    onCropComplete={onCropCompleteHandler}
                />
            </div>

            <div className="cropper-controls" style={{
                marginTop: '1rem', padding: '1rem', background: 'white', borderRadius: '12px',
                display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'space-between', flexWrap: 'wrap'
            }}>
                <div style={{ flex: 1, minWidth: '200px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '0.9rem', color: '#333' }}>Zoom</span>
                    <input
                        type="range"
                        value={zoom}
                        min={1}
                        max={3}
                        step={0.1}
                        aria-labelledby="Zoom"
                        onChange={(e) => setZoom(e.target.value)}
                        className="zoom-range"
                        style={{ width: '100%', accentColor: 'var(--color-accent)' }}
                    />
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button onClick={onCancel} className="btn" style={{ background: '#f5f5f5', color: '#333', border: '1px solid #ddd' }}>
                        <X size={18} /> Cancel
                    </button>
                    <button onClick={handleSave} className="btn btn-primary">
                        <Check size={18} /> Crop & Upload
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImageCropper;
